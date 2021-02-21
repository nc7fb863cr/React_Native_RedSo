export async function request( team, page ){
  let url = `https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=${team}&page=${page}`;
  let res = await fetch(url);
  let result = await res.json();

  if (result['results']){
    return result['results'];
  } else {
    return [];
  }
}