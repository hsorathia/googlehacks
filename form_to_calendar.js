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

    var title = answers[0];
    var eventDate = answers[1];
    var eventTime = answers[2];
    var eventDuration = answers[3];

    var startTime = new Date(eventDate + " " + eventTime);
    var endTime = new Date(startTime.getTime() + (eventDuration*60*60*1000));

    var testCalendar = CalendarApp.getDefaultCalendar();
  
    var event = testCalendar.createEvent(title,
        startTime,
        endTime,
        {
          description: eventDate + " " + eventTime + " " + eventDuration
        }
    );
    Logger.log(startTime + " " + endTime);
}