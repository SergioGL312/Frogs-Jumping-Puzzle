trasitions = {
    ("1", "1"): ["1"],
    ("1", "2"): ["33"],
    ("1", "3"): ["2"],
    ("1", "4"): ["17"],
    ("1", "5"): ["33"],
    ("1", "6"): ["1"],
}



initial_state = "1"
final_states = ["16", "31"]

def is_accepted(string):
    # print(trasitions[("1", "3")])
    current_states = trasitions[(initial_state, string[0])]
    # print(f"current_states: {current_states}")
    for letter in string[1:]:
        next_states = []
        for state in current_states:
            next_states += trasitions[(state, letter)]
        current_states = next_states
    return any(state in final_states for state in current_states)

# pruebas
print(is_accepted("345321456321432"))  # True 345321456321561