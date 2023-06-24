import pandas as pd
from connection import get_connection

conn = get_connection()
db = conn['premier_league_2023']
collection = db['teams']

teams = pd.read_csv('./../data/epl_clubs_info_2022-23.csv')
goals_scored = pd.read_csv('./../data/goals.csv')
goals_conceded = pd.read_csv('./../data/goals_conceded.csv')

pl_teams = teams['club_name'].to_list()


# remove the home_goals and away_goals field
collection.update_many({}, {'$unset': {'home_goals':None}})
collection.update_many({}, {'$unset': {'away_goals':None}})


for team in pl_teams:

    goals_s = {
        'home': None,
        'away': None
    }

    goals_c = {
        'home': None,
        'away': None
    }

    # get goals scored data
    goals_scored_data = goals_scored.loc[goals_scored['team'] == team]
    goals_s['home'] = int(goals_scored_data['home_goals'].values[0])
    goals_s['away'] = int(goals_scored_data['away_goals'].values[0])

    # get goals conceded data
    goals_conceded_data = goals_conceded.loc[goals_conceded['team'] == team]
    goals_c['home'] = int(goals_conceded_data['home_goals_conceded'].values[0])
    goals_c['away'] = int(goals_conceded_data['away_goals_conceded'].values[0])


    # add new fields
    collection.update_one({'name':team}, {'$set': {'goals_scored': goals_s}})
    collection.update_one({'name':team}, {'$set': {'goals_conceded': goals_c}})
