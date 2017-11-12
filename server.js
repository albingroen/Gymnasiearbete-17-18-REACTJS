
const fetch = require('isomorphic-fetch')
const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/api/:region/:userName', async (req, res) => {
    const APIkey = 'RGAPI-8857d373-72c1-4fe4-867e-5af9f3375d20'
    const region = req.params.region
    const name = req.params.userName

    const summonerRequest = await fetch(
      `https://${region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${name}?api_key=${APIkey}`,
    )
    const summoner = await summonerRequest.json()

    const recentRequest = await fetch(
      `https://${region}.api.riotgames.com/lol/match/v3/matchlists/by-account/${summoner.accountId}/recent?api_key=${APIkey}`,
    )
    const recent = await recentRequest.json()

    const leagueRequest = await fetch(
      `https://${region}.api.riotgames.com/lol/league/v3/positions/by-summoner/${summoner.id}?api_key=${APIkey}`,
    )

    const league = await leagueRequest.json()
    const latestLeagues = league[0]
    console.log(fetch,summonerRequest)
    return res.json({
      name: summoner.name,
      level: summoner.summonerLevel,
      recentMatches: recent.matches,
      //winsInLatestLeague: latestLeagues.wins,
    })
  })

  server.get('/dashboard/:region/:userName', (req, res) => {
    return app.render(req, res, '/dashboard', {region: req.params.region, userName: req.params.userName})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
