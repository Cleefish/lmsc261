#OPEN & CONVERT JSON FILE
import json

data_json = open("skaters.json")
data_dict = json.load(data_json)

def check_age_experience(skaters):

    for skater in skaters:

        #RETRIEVE SKATER INFO FROM DICTIONARY
        name = skater.get("name")
        age = skater.get("age")
        is_experienced = skater.get("is_experienced")

        #IF STATEMENT NEEDS TO BE INSIDE FOR LOOP
        if (age >= 13 and is_experienced):
            print(f"Hi {name}, welcome to the skate park!")

check_age_experience(data_dict)