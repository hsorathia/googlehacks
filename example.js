module.exports = {
  createnewchannel: function(guild, json) {
    return Promise ( (res,rej) => {
       //PLEASE CHANGE THESE LINES
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      var ch_name = json.channelname;
      var ch_desc = json.channeldesc;
      var calendar_link = json.callink;

      guild
        .createChannel(ch_name, { type: "text" })
        .then(async txtChannel => {
          await txtChannel.edit({ topic: ch_desc });
          await txtChannel.send(calendar_link);
          res(txtChannel)
        })
        .catch(console.error);

      });
  }
};
