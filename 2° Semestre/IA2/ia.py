import re
import tkinter as tk
from tkinter import ttk, messagebox

# --------------------------
# Funções de tradução
# --------------------------

def nl_para_cpc(frase_original):
    frase = frase_original.strip()
    if not frase:
        return "", {}

    frase = frase.lower().strip()
    frase = frase.replace("?", "").replace("!", "").replace(".", "")

    # Tratar "se ... então ..."
    m = re.search(r'\bse\s+(.+?)\s*(?:,?\s*então|então)\s+(.+)', frase)
    if m:
        left = m.group(1).strip()
        right = m.group(2).strip()
        frase = f"{left} → {right}"

    # Substituições dos conectivos
    frase = re.sub(r'\bse e somente se\b', ' ↔ ', frase)
    frase = re.sub(r'\be\b', ' ∧ ', frase)
    frase = re.sub(r'\bou\b', ' ∨ ', frase)
    frase = re.sub(r'\bnão\s+', '¬', frase)
    frase = re.sub(r'\s+', ' ', frase).strip()

    # Extrair proposições entre símbolos
    partes = re.split(r'[∧∨→↔()]+', frase)
    partes = [p.strip() for p in partes if p.strip()]

    # Mapear frases únicas -> letras
    mapa = {}
    letra_ord = ord('P')
    for p in partes:
        termo = p.replace("¬", "").strip()
        if termo and termo not in mapa.values():
            mapa[chr(letra_ord)] = termo
            letra_ord += 1
            if letra_ord > ord('Z'):
                break

    # Substituir frases pelas letras (em ordem de tamanho decrescente)
    for letra, termo in sorted(mapa.items(), key=lambda x: -len(x[1])):
        frase = re.sub(r'\b' + re.escape(termo) + r'\b', letra, frase)

    # Ajustes finais
    frase = re.sub(r'\s+', ' ', frase).strip()
    return frase, mapa


def cpc_para_nl(formula, mapa):
    texto = formula.strip()

    # Substituir letras por frases conhecidas
    for letra, termo in mapa.items():
        texto = texto.replace(letra, termo)

    # Substituir conectivos por expressões naturais
    texto = texto.replace('¬', 'não ')
    texto = texto.replace('∧', ' e ')
    texto = texto.replace('∨', ' ou ')
    texto = texto.replace('↔', ' se e somente se ')
    texto = texto.replace('→', ' então ')

    # Transformar em frase natural
    m = re.search(r'(.+)\sentão\s(.+)', texto)
    if m:
        texto = f"Se {m.group(1).strip()} então {m.group(2).strip()}"

    return texto.capitalize()


# --------------------------
# Interface Tkinter
# --------------------------

class TradutorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Agente de IA - NL ↔ CPC (versão final)")
        self.root.geometry("700x500")
        self.root.config(bg="#f7f7f7")

        ttk.Label(root, text="Digite uma frase (NL) ou fórmula (CPC):", font=("Arial", 11)).pack(pady=8)
        self.input_text = tk.Text(root, height=5, width=80)
        self.input_text.pack(pady=4)

        frame_btn = ttk.Frame(root)
        frame_btn.pack(pady=8)

        ttk.Button(frame_btn, text="NL → CPC", command=self.traduzir_nl_cpc).grid(row=0, column=0, padx=8)
        ttk.Button(frame_btn, text="CPC → NL", command=self.traduzir_cpc_nl).grid(row=0, column=1, padx=8)
        ttk.Button(frame_btn, text="Limpar", command=self.limpar).grid(row=0, column=2, padx=8)

        ttk.Label(root, text="Resultado:", font=("Arial", 11)).pack(pady=8)
        self.output_text = tk.Text(root, height=4, width=80, state='disabled')
        self.output_text.pack(pady=4)

        ttk.Label(root, text="Mapa de proposições (P=..., Q=...):", font=("Arial", 11)).pack(pady=8)
        self.mapa_text = tk.Text(root, height=6, width=80, state='disabled')
        self.mapa_text.pack(pady=4)

        self.mapa = {}

    def traduzir_nl_cpc(self):
        frase = self.input_text.get("1.0", "end").strip()
        if not frase:
            messagebox.showwarning("Aviso", "Digite uma frase em português (NL).")
            return
        formula, mapa = nl_para_cpc(frase)
        self.mapa = mapa
        self.mostrar_resultado(formula, mapa)

    def traduzir_cpc_nl(self):
        formula = self.input_text.get("1.0", "end").strip()
        if not formula:
            messagebox.showwarning("Aviso", "Digite uma fórmula CPC.")
            return

        # Se não tiver mapa anterior, usa padrão automaticamente (sem popup)
        if not self.mapa:
            self.mapa = {'P': 'chover', 'Q': 'a grama ficará molhada', 'R': 'a aula será cancelada'}

        frase = cpc_para_nl(formula, self.mapa)
        self.mostrar_resultado(frase, self.mapa)

    def mostrar_resultado(self, texto, mapa):
        self.output_text.config(state='normal')
        self.output_text.delete("1.0", "end")
        self.output_text.insert("1.0", texto)
        self.output_text.config(state='disabled')

        self.mapa_text.config(state='normal')
        self.mapa_text.delete("1.0", "end")
        for k, v in mapa.items():
            self.mapa_text.insert("end", f"{k} = {v}\n")
        self.mapa_text.config(state='disabled')

    def limpar(self):
        self.input_text.delete("1.0", "end")
        self.output_text.config(state='normal')
        self.output_text.delete("1.0", "end")
        self.output_text.config(state='disabled')
        self.mapa_text.config(state='normal')
        self.mapa_text.delete("1.0", "end")
        self.mapa_text.config(state='disabled')
        self.mapa = {}


# --------------------------
# Execução
# --------------------------
if __name__ == "__main__":
    root = tk.Tk()
    app = TradutorApp(root)
    root.mainloop()
