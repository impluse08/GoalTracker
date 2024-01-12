class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}


/*
This code defines a class named ApiError that extends the built-in Error class. It is designed to create instances of errors specific to an API.

    Constructor:
        The constructor takes four parameters:
            statusCode: The HTTP status code to be associated with the error.
            message: A human-readable error message. It has a default value of "Something went wrong" if not provided.
            errors: An array that can contain additional error details or messages.
            stack: A stack trace string that provides information about the error's call stack.

    Super Call:
        super(message) is called to invoke the constructor of the parent class (Error). It sets the error message.

    Instance Properties:
        this.statusCode: Represents the HTTP status code associated with the error.
        this.data: Initially set to null. It's a property where additional data associated with the error could be stored.
        this.message: Represents the error message.
        this.success: Set to false by default, indicating that the operation associated with this error was not successful.
        this.errors: An array to hold additional error details or messages.

    Stack Trace Handling:
        If a stack is provided, it sets the stack property of the instance. Otherwise, it captures the stack trace using Error.captureStackTrace(this, this.constructor).

    Export:
        The ApiError class is exported from the module.

This class can be used to create instances of API-specific errors with associated status codes, messages, and additional details. For example:
*/