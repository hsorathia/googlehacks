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

    var addOrSearch = answers[0];
    var title = answers[1];
    var emails = answers[2];
    var eventDate = answers[3];
    var eventTime = answers[4];
    var eventDuration = answers[5];
    var id = answers[6];

    if (addOrSearch === "Adding")
    {
        var startTime = new Date(eventDate + "T" + eventTime + ":00Z");
        var endTime = new Date(startTime.getTime() + (eventDuration*60*60*1000));
        var testCalendar = CalendarApp.getDefaultCalendar();
        var event = testCalendar.createEvent(title,
            startTime,
            endTime,
            {
                guests: emails,
                sendInvites: true
            }
        );
        form.setConfirmationMessage("ID is " + lastResponse.getId());

    }
    else if (addOrSearch === "Searching")
    {
        for (var i = 0; i < formResponses; i++)
        {
            
        }
    }
}