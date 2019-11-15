module.exports = {
  createnewchannel: function(guild, json, link) {
    return new Promise ( (res,rej) => {
      console.log('Create new channel called');
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      var ch_name = json.Name;
      var ch_desc = json.Description;
      // var date = json.Date
      // var calendar_link = link;
      var msg = "Date is " + json.Date.toString() + ".\n The link is "+ link.toString();
      guild.foreach(function(element)
      var event_id = '644959822910849025'
      
      guild
        .createChannel(ch_name, { type: "text" })
        .then(async txtChannel => {
        console.log(`text channel created`);
          await txtChannel.edit({ topic: ch_desc });
          await txtChannel.setParent(event_id)
              .then(updated => console.log(`Set the category of ${updated.name} to ${updated.parent.name}`))
              .catch(console.error);
          await txtChannel.send(msg);
          res(txtChannel)
        })
        .catch(console.error);

      });
  }
};
