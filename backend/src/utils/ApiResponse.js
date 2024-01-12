class ApiResponce {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponce }

/*
Of course! Imagine you have a special box called ApiResponce. This box is like a messenger that carries information from one place to another in a computer program. It knows three important things: statusCode, data, and message.

    statusCode: This is like a signal that tells us whether everything went well or if there was a problem. If the statusCode is less than 400, it means everything is good, like getting a gold star. If it's 400 or more, it means something didn't go as planned, like a red warning sign.

    data: This is the actual information we want to send or receive. It could be a list of names, numbers, or anything else we need.

    message: Just like when you send a message to a friend, this is a little note that can go along with the information. It's usually a friendly "Success" message, but it can change to say something else if needed.

There's also a helper called success. It's like a happy helper that quickly checks if everything is fine. If the statusCode is less than 400, the helper says "Yes, it's a success!" Otherwise, it says "No, something went wrong."
*/