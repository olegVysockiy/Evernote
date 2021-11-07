function registerWsMessages(map, ws) {
  ws.on('message', async function (message) {
    const dataFromFront = JSON.parse(message);

    switch (dataFromFront.type) {
      case 'newGame':
        // try {
        //   const { name, owner } = dataFromFront.payload.myGame;
        //   try {
        //     const game = await Game.create({
        //       name,
        //       owner,
        //     });
        //     for (let [id, userConnect] of map) {
        //       userConnect.send(
        //         JSON.stringify({
        //           type: 'newGameCreate',
        //           payload: game,
        //         })
        //       );
        //     }
        //   } catch (err) {
        //     console.log(err);
        //     ws.send(
        //       JSON.stringify({
        //         type: 'err',
        //         payload: 'err',
        //       })
        //     );
        //   }
        // } catch (err) {
        //   console.log(err);
        //   ws.send(
        //     JSON.stringify({
        //       type: 'err',
        //       payload: 'err',
        //     })

        //   );
        // }
        break;

      default:
        break;
    }
  });
}
module.exports = registerWsMessages;
