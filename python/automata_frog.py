from io import open

global δ, tablaT, qA

file = open("AFD_Frogs.txt", "r")
texto = file.readlines()
file.close()

Q = int(72)
Σ = texto[1].replace('\n', '').split()
q0 = texto[2].replace('\n', '') 
F = texto[3].replace('\n', '').split(' ')

qA = q0

def reglasTrancision(): # 1 3 2
    global δ
    δ = []
    for i in range(4, len(texto)):
        δ.append(texto[i].split())

def create_transition_table_from_matrix():
    global tablaT

    matrix = δ
    transition_table = {}
    for i, row in enumerate(matrix):
        current_state = i+1
        transition_table[current_state] = {}
        for j, next_state in enumerate(row):
            symbol = j+1
            transition_table[current_state][symbol] = next_state
    
    tablaT = []
    for state, symbols in transition_table.items():
        for symbol, next_state in symbols.items():
            tablaT.append([str(state), str(symbol), next_state])



def perteneceAlfabeto():
    global qA

    bandera = True
    tablaC = []

    print("345321456321561\n432456321456216")
    cadena = input("Palabra w = ")
    
    for caracter in cadena:
        if caracter in Σ:
            for trancisiones in tablaT:
                if caracter in trancisiones[1] and qA == trancisiones[0]:
                    tablaC.append([qA,caracter,trancisiones[2]])
                    qA = trancisiones[2]
                    break
        else:
            bandera = False
    print(tablaC)
    if qA in F and (bandera == True):
        plantillaTabla(tablaC)
        print(f"\n\t\tPalabra w = {cadena} ACEPTADA\n")
    else:
        plantillaTabla(tablaC)
        print(f"\n\t\tPalabra w = {cadena} NO ACEPTADA\n")
        
def plantillaTabla(tablaC):
    print("\nEstado Actual\tCarácter Leido\tEstado Siguiente")
    for t in range(0, len(tablaC)):
        print (f"\t{tablaC[t][0]}\t\t{tablaC[t][1]}\t\t{tablaC[t][2]}")

def main():
    reglasTrancision()
    create_transition_table_from_matrix()
    perteneceAlfabeto()

if __name__ == '__main__':
    main()
