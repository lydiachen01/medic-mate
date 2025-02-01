import pandas as pd


# load a dataset from a CSV file
def load_data(filepath):
    try:
        df = pd.read_csv(filepath, delimiter=',')
        return df
    except FileNotFoundError:
        print(f"Error: {filepath} not found.")
        return None


# get side effects for a given drug
def get_side_effects(df, drug_name):
    drug_data = df[(df['drug_name'].str.lower() == drug_name.lower()) | (df['generic_name'].str.lower() == drug_name.lower())]
    
    if drug_data.empty:
        return "No side effects data available."
    
    return drug_data['side_effects'].iloc[0]


# get all instances of a given drug's interactions
def get_drug_info(df, drug_name):
    drug_data = df[(df['Drug 1'].str.lower() == drug_name.lower()) | (df['Drug 2'].str.lower() == drug_name.lower())]
    
    if drug_data.empty:
        return None
    
    return drug_data[['Drug 1', 'Drug 2', 'Interaction Description']]


def main():
    interactions_filepath = "db_drug_interactions.csv"
    side_effects_filepath = "drugs_side_effects_drugs_com.csv"
    
    df_interactions = load_data(interactions_filepath)
    df_side_effects = load_data(side_effects_filepath)
    
    if df_interactions is not None and df_side_effects is not None:
        # ask the user what drugs they're using
        drug_name = input("Enter the name of the drug you are taking: ")

        # store the side effects and drug info in vars
        side_effects = get_side_effects(df_side_effects, drug_name)
        result = get_drug_info(df_interactions, drug_name)
        
        # print out the possible side effects and other drugs that the user
        # should not be taking while on their current drug
        print(f"Side Effects: {side_effects}\n")
        print(f"Drug interactions for {drug_name}:\n")

        if result is not None:
            for _, row in result.iterrows():
                print(f"{row['Drug 2']}:\n{row['Interaction Description']}\n")
        else:
            print("No known interactions found.")
        

if __name__ == "__main__":
    main()
