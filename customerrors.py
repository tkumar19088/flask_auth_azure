class CustomError(Exception):
    def __init__(self, status_code, message):
        self.status_code = status_code
        self.message = message
        super().__init__(self.message)

class BadRequestError(CustomError):
    def __init__(self, message="Bad request"):
        super().__init__(400, message)

class UnauthorizedError(CustomError):
    def __init__(self, message="Unauthorized access"):
        super().__init__(401, message)

class ForbiddenError(CustomError):
    def __init__(self, message="Forbidden"):
        super().__init__(403, message)

class ResourceNotFoundError(CustomError):
    def __init__(self, message="Resource not found"):
        super().__init__(404, message)

class MethodNotAllowedError(CustomError):
    def __init__(self, message="Method not allowed"):
        super().__init__(405, message)

class ConflictError(CustomError):
    def __init__(self, message="Conflict"):
        super().__init__(409, message)

class TooManyRequestsError(CustomError):
    def __init__(self, message="Too many requests"):
        super().__init__(429, message)

class InternalServerError(CustomError):
    def __init__(self, message="Internal server error"):
        super().__init__(500, message)

class NotImplementedError(CustomError):
    def __init__(self, message="Not implemented"):
        super().__init__(501, message)
