function onSubmit(e){
    //get the form
    var form = FormApp.getActiveForm();
    var ss = SpreadsheetApp.create('Collecting Sheet');
    //get latest form response
    var formResponses = form.getResponses();
    var lastResponseIndex = formResponses.length -1;
    var lastResponses = formResponses[lastResponseIndex];
    var editURL = lastResponses.getEditResponseUrl();
    var wholeItems = lastResponses.getItemResponses();
    var answers = [];
    
    var editurl = lastResponses.getEditResponseUrl();
    form.setTitle('Form Name')
       .setConfirmationMessage('Thank you for your time!');
    form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getID());
  
    for (var i = 0; i < wholeItems.length; i++)
    {
        answers[i] = wholeItems[i].getResponse();
    }

    var title = answers[0];
    var emails = answers[1];
    var eventDate = answers[2];
    var eventTime = answers[3];
    var eventDuration = answers[4];

    var testCalendar = CalendarApp.getDefaultCalendar();
    emails = '[' + emails + ']';
    var emailsArray = JSON.parse(emails);
    var emailsString = "";
    for (var i = 0; i < emailsArray.length; i++)
    {
        if (i < emailsArray.length - 1)
        {
            emailsString += emailsArray[i] + ",";
        }
    }

    // if (addingMoreBool === "New Event")
    // {
    var startTime = new Date(eventDate + "T" + eventTime + ":00Z");
    var endTime = new Date(startTime.getTime() + (eventDuration*60*60*1000));
    var event = testCalendar.createEvent(title,
        startTime,
        endTime,
            {
                guests: emailsString,
                sendInvites: true
            }
        );
    // }
    // else
    // {
    //     var items;
    //     for (var i = 0; i < formResponses.length; i++)
    //     {
    //         var currentResponse = formResponses[i];
    //         var searchedItems = currentResponse.getItemResponses();
    //         if (title === searchedItems[1].getResponse())
    //         {
    //             if (eventDate === searchedItems[3].getResponse())
    //             {
    //                 if (eventTime === searchedItems[4].getResponse())
    //                 {
    //                     items = searchedItems;
    //                     break;
    //                 }
    //             }
    //         }
    //     }
    //     if (items != null )
    //     {        
    //         var searchedStartTime = new Date(items[3].getResponse() + "T" + items[4].getResponse() + ":00Z");
    //         var searchedEndTime = new Date(searchedStartTime.getTime() + (items[5] * 60 * 60 * 1000));
    //         if (searchedStartTime > searchedEndTime)
    //         {
    //             var searchedForEvent = testCalendar.getEvents(
    //                 searchedStartTime, 
    //                 searchedEndTime
    //                 );
    //         }
    //         else
    //         {
    //             form.setConfirmationMessage("It doesn't find the event");
    //         }
    //         if (searchedForEvent !== null && searchedForEvent !== undefined)
    //         {
    //             if (emails !== null && searchedForEvent !== undefined)
    //             {
    //                 var separatedEmails = [];
    //                 var emailAddress = "";
    //                 for (var i = 0; i < emails.length; i++)
    //                 {
    //                     if (emails.charAt(i) === ";")
    //                     {
    //                         separatedEmails[separatedEmails.length] = emailAddress;
    //                         emailAddress = "";
    //                     }
    //                     else
    //                     {
    //                         emailAddress += emails.charAt(i);
    //                     }
    //                 }
    //                 for (var i = 0; i < separatedEmails.length; i++)
    //                 {
    //                     searchedForEvent.addGuest(separatedEmails[i]);
    //                     console.log("Email " + i + ": " + separatedEmails[i]);
    //                 }
    //             }
    //         }
    //     }
    // }
}