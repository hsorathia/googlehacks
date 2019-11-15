module.exports = {
  createnewchannel: function(guild, json, link) {
    return new Promise ( (res,rej) => {
      console.log('Create new channel called');
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      var ch_name = json.Name;
      var ch_desc = json.Description;
      var ch_cat = json.Category.;
      // var date = json.Date
      // var calendar_link = link;
      var msg = "Date is " + json.Date.toString() + ".\n The link is "+ link.toString();
      var event_id = '';
      guild.channels.forEach(function(channel){
        if (channel.type == "category" && channel.deleted == false){
          console.log(channel.name);
          console.log(channel);
          if (channel.name == ch_cat){
            event_id = channel.id;
          }
        }
      });
      
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
