from app.services.value_service import get_value_from_db

def register_socket_events(socketio):
    @socketio.on('input_change')
    def handle_input_change(data):
        value_id = data['id']
        input_value = data['input_value']
        db_value = get_value_from_db(value_id)

        if input_value is None or input_value == 0 or db_value in [None, 0]:
            percentage = 0
        else:
            percentage = (input_value / db_value) * 100

        socketio.emit('percentage_update', {
            'id': value_id,
            'percentage': round(percentage, 2)
        })
