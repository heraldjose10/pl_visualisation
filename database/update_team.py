import pandas as pd
from connection import get_connection

conn = get_connection()
db = conn['premier_league_2023']
collection = db['teams']

teams = pd.read_csv('./../data/epl_clubs_info_2022-23.csv')

pl_teams = teams['club_name'].to_list()

for team in pl_teams:

    # get hex code and logo
    hex = teams.loc[teams['club_name'] == team]['hex_code']
    logo = teams.loc[teams['club_name'] == team]['logo_link']

    # add new fields
    collection.update_one({'name':team}, {'$set': {'logo_link': logo.values[0]}})
    collection.update_one({'name':team}, {'$set': {'hex_code': hex.values[0]}})