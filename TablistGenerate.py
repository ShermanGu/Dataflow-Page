import os
import re
import json

def get_file_names_in_folder(folder_path):
    file_names = [file for file in os.listdir(folder_path) if file.endswith(".json")]
    return file_names

def custom_sort(strings):
    def extract_number(s):
        match = re.search(r'\d+', s)
        return int(match.group()) if match else None

    def sort_key(s):
        return [extract_number(s), s]

    sorted_strings = sorted(strings, key=sort_key)
    return sorted_strings

folder_path = "./public/flow"  # Replace with the actual path to your folder
file_names_list = get_file_names_in_folder(folder_path)
result = []
for names in file_names_list:
    result += [names.split('.')[0]]
sorted_list = custom_sort(result)



output_directory = "./src/"  # Replace with the desired directory path
output_file_name = "tablist.json"  # Replace with the desired file name

# Combine the directory path and file name to form the full output file path
output_file_path = output_directory + output_file_name
with open(output_file_path, "w") as f:
    json.dump(sorted_list, f)
