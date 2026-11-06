import json

data_json = open("ramps.json")
data_dict = json.load(data_json)

for k, v in data_dict.items():
    
    print(f"{k}'s favorite ramp is {v}")