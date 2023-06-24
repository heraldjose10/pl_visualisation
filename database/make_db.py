import pandas as pd
from connection import get_connection

conn = get_connection()
db = conn['premier_league_2023']
collection = db['teams']

teams = pd.read_csv('./../data/epl_clubs_info_2022-23.csv')
goals = pd.read_csv('./../data/goals.csv')
cards = pd.read_csv('./../data/yellow_red.csv')
standings = pd.read_csv('./../data/standings.csv')
goal_diff = pd.read_csv('./../data/goal_diff.csv')


pl_teams = teams['club_name'].to_list()

for team in pl_teams:

    data = {
        'name': team
    }

    # get cards data
    cards_data = cards.loc[cards['team'] == team]
    data['red_cards'] = int(cards_data['red_cards'].values[0])
    data['yellow_cards'] = int(cards_data['yellow_cards'].values[0])
    # get standings of the teams
    data['standings'] = standings[team].to_list()

    # get goal difference of the teams
    data['goal_diff'] = goal_diff[team].to_list()

    # insert the team data to database
    collection.insert_one(data)