
import { createClient } from "@supabase/supabase-js"


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const databaseAdmin = createClient(supabaseUrl, supabaseAnonKey)


export async function Clear(){
  const teams = await databaseAdmin
  .from("Team")
  .select("*");

  const updateClt ={
    wins:0,
    draws:0,
    defeats:0,
    goals_scored:0,
    goals_against:0,
    points:0
  } 

  teams.data.map(async function(i){
    await databaseAdmin
    .from("Team")
    .update(updateClt, {returning:'minimal'})
    .match({id_team:i.id_team})
  })

  const matches = await databaseAdmin
  .from ("Match")
  .select("*");

  matches.data.map(async function(i){
    await databaseAdmin
    .from("Match")
    .delete()
    .match({id_match:i.id_match}); 
  })     


}

export async function getData() {
  const {data, error} = await databaseAdmin
  .from("Team")
  .select("*")
  .order("points", {ascending:false})
  .order("goals_scored", {ascending:false});

  if(error){
      throw error
  }else{
      //console.log("data")
  }

  return data
}

export async function Match(match_id, team_id, num_goals){
  const {data, error} = await databaseAdmin
  .from("Match")
  .select("*")
  .eq("id_match", match_id);

  const team = team_id.split("-");

  const updateData ={
    id_match:match_id
  }

  team[1] == 1 ? 
    updateData["id_team_1"] = team[0]
  :
    updateData["id_team_2"] = team[0]

  team[1] == 2 ? 
    updateData["team_2_goals"]= num_goals
  :
    updateData["team_1_goals"] = num_goals


  let match = databaseAdmin
  .from("Match")
  
  var change = false

  if(data.length == 0){
    match = match.upsert(
      updateData, 
      {returning:'minimal'})
  }else{
    data[0].id_team_1 == null || data[0].id_team_2 == null ? change = true : change = false
    match = match.update(
      updateData, 
      {returning:'minimal'})   
    
    await calcWinsDefeatsDraws(team[0]);
  }
  const matchQ = await match
  await calcWinsDefeatsDraws(team[0]);
  
}


export async function calcWinsDefeatsDraws(team_id){

  var winsM = 0
  var defeatsM = 0
  var drawsM = 0
  var goals_scoredM = 0
  var goals_againstM = 0
  

  const num1 = await databaseAdmin
  .from('Match')
  .select('*')
  .filter('id_team_1', 'in','('+team_id+')');
  
  const num2 = await databaseAdmin
  .from('Match')
  .select('*')
  .filter('id_team_2', 'in','('+team_id+')');

  num1.data.map(function(i){
    i.team_1_goals > i.team_2_goals ? winsM += 1: i.team_1_goals == i.team_2_goals ? drawsM += 1 : defeatsM += 1
    goals_scoredM += i.team_1_goals
    goals_againstM += i.team_2_goals
  })
  num2.data.map(function(i){
    i.team_1_goals < i.team_2_goals ? winsM += 1 : i.team_1_goals == i.team_2_goals ? drawsM += 1 : defeatsM += 1
    goals_scoredM += i.team_2_goals
    goals_againstM +=i.team_1_goals
  })

  const pointsM = (winsM*3)+drawsM
  
  const data1 = await databaseAdmin
    .from("Team")
    .update({wins:winsM, defeats:defeatsM, draws:drawsM, goals_scored:goals_scoredM, goals_against:goals_againstM, points:pointsM})
    .match({id_team:team_id})

}

