
function onSubmit(e){
    var form = FormApp.getActiveForm();
    var formResponses = form.getResponses();
    var lastResponse = formResponses[formResponses.length - 1];
    var wholeItems = lastResponse.getItemResponses();
    var answers = [];

    for (var i = 0; i < wholeItems.length; i++)
    {
        answers[i] = wholeItems[i].getResponse();
    }

    var addingMoreBool = answers[0];
    var title = answers[1];
    var emails = answers[2];
    var eventDate = answers[3];
    var eventTime = answers[4];
    var eventDuration = answers[5];

    var testCalendar = CalendarApp.getDefaultCalendar();

    
    if (addingMoreBool === "New Event")
    {
        console.log(addingMoreBool);
        var startTime = new Date(eventDate + "T" + eventTime + ":00Z");
        var endTime = new Date(startTime.getTime() + (eventDuration*60*60*1000));
        var event = testCalendar.createEvent(title,
            startTime,
            endTime,
                {
                    guests: emails,
                    sendInvites: true
                }
            );
    }
    else
    {
        var items;
        for (var i = 0; i < formResponses.length; i++)
        {
            var currentResponse = formResponses[i];
            var searchedItems = currentResponse.getItemResponses();
            if (title === searchedItems[1].getResponse())
            {
                if (eventDate === searchedItems[3].getResponse())
                {
                    if (eventTime === searchedItems[4].getResponse())
                    {
                        items = searchedItems;
                        break;
                    }
                }
            }
        }
        if (items != null )
        {        
            var searchedStartTime = new Date(items[3].getResponse() + "T" + items[4].getResponse() + ":00Z");
            var searchedEndTime = new Date(searchedStartTime.getTime() + (items[5] * 60 * 60 * 1000));
            if (searchedStartTime > searchedEndTime)
            {
                var searchedForEvent = testCalendar.getEvents(
                    searchedStartTime, 
                    searchedEndTime
                    );
            }
            else
            {
                form.setConfirmationMessage("It doesn't find the event");
            }
            if (searchedForEvent !== null && searchedForEvent !== undefined)
            {
                if (emails !== null && searchedForEvent !== undefined)
                {
                    var separatedEmails = [];
                    var emailAddress = "";
                    for (var i = 0; i < emails.length; i++)
                    {
                        if (emails.charAt(i) === ";")
                        {
                            separatedEmails[separatedEmails.length] = emailAddress;
                            emailAddress = "";
                        }
                        else
                        {
                            emailAddress += emails.charAt(i);
                        }
                    }
                    for (var i = 0; i < separatedEmails.length; i++)
                    {
                        searchedForEvent.addGuest(separatedEmails[i]);
                        console.log("Email " + i + ": " + separatedEmails[i]);
                    }
                }
            }
        }
    }
}