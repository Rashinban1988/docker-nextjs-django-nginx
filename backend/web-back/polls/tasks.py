from celery import shared_task  # type: ignore


@shared_task()
def hello_world():
    print("start hello_world")
    print("hello")
    print("-----" * 200)
    print("end hello_world")


@shared_task()
def calc(a: int, b: int) -> int:
    result: int = a + b
    return result