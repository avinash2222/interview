(async () => {
  try {
    agenda = await initAgendaConnection()
    // console.log(agenda)
  } catch (e) {
    console.log(e)
  }
})()
//----------------------------------------------------
