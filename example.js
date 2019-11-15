module.exports = {
  createnewchannel: function(guild, json, link) {
    return Promise ( (res,rej) => {
      console.log('Create new channel called');
       //PLEASE CHANGE THESE LINES
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      var ch_name = json.Name;
      var ch_desc = json.Description;
      var date = json.Date
      var calendar_link = link;

      guild
        .createChannel(ch_name, { type: "text" })
        .then(async txtChannel => {
        console.log(`text channel created`);
          await txtChannel.edit({ topic: ch_desc });
          await txtChannel.send(calendar_link);
          res(txtChannel)
        })
        .catch(console.error);

      });
  }
};
