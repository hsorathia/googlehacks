module.exports = {
  createnewchannel: function(guild, json) {
    return new Promise ( (res,rej) => {
      console.log('Create new channel called');
      //Grabbing variables from json. Declaring these variables so you can easily manage them if the json setup is different, which it wil be
      //required fields: name, description, category, date
      var ch_name = json.Name;
      var ch_desc = json.Description;
      var ch_cat = json.Category.toLowerCase();
      var ch_link = json.Link;
      var ch_date = json.Date;
      var msg = 'Event: ' + ch_name;
      if (ch_date != undefined){
        msg += '\nDate: ' + ch_date;
      }
      if (ch_link != undefined){
        msg += '\nLink: ' + ch_link;
      }
        
      // var msg = "Date is " + json.Date.toString() + ".\n The link is "+ ch_link.toString();
      var cat_id = '';
      guild.channels.forEach(function(channel){
        if (channel.type == "category" && channel.deleted == false){
          if (channel.name == ch_cat){
            cat_id = channel.id;
          }
        }
      });
      if (cat_id == '')
      
      guild
        .createChannel(ch_name, { type: "text" })
        .then(async txtChannel => {
        console.log(`text channel created`);
          await txtChannel.edit({ topic: ch_desc });
          await txtChannel.setParent(cat_id)
              .then(updated => console.log(`Set the category of ${updated.name} to ${updated.parent.name}`))
              .catch(console.error);
          await txtChannel.send(msg);
          res(txtChannel)
        })
        .catch(console.error);

      });
  }
};
