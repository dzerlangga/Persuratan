const Kudation = {
    schema(skema) {
        try {
          if (!skema)
            throw { status: 400, message: 'should passing paramater skema' }
          if (Array.isArray(skema) || !(skema instanceof Object))
            throw { status: 400, message: 'should object' }
          if (!Object.keys(skema).length)
            throw { status: 400, message: 'object should contain atleast one keys' }

          /**
           * Validation Variables
           * @TODO make variable can be accessed by GETTER SETTER FUNCTION
           * @TODO link for helping development https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85
           */
    
          var _SCHEMA,
            _VALUE,
            _RULES_PARAMETER,
            _THIS,
            _SAMEAS_VALUE = {},
            _RESULT = {},
            _CUSTOM_MESSAGE = ''
    
          _THIS = {
            required: required,
            _VALUE: _VALUE,
            _RULES_PARAMETER: _RULES_PARAMETER,
            _SAMEAS_VALUE: _SAMEAS_VALUE,
          }
    
      
  
          function required() {
            console.log('masuk');
            // if (
            //   !Array.isArray(_VALUE) &&
            //   _VALUE instanceof Object &&
            //   !_VALUE instanceof Date
            // ) {
            //   if (!Object.keys(_VALUE).length) {
            //     return _CUSTOM_MESSAGE || 'data object harus memiliki satu key'
            //   }
            // }
            // if (
            //   Array.isArray(_VALUE) &&
            //   _VALUE instanceof Object &&
            //   !_VALUE instanceof Date
            // ) {
            //   if (!_VALUE.length) {
            //     return _CUSTOM_MESSAGE || 'data array harus memiliki satu key'
            //   }
            // }
            // if (!_VALUE) {
            //   return _CUSTOM_MESSAGE || 'data harus di isi'
            // }
          }
    
    
          function validation(data_object, _callback) {
            try {
            //   if (!data_object) throw { status: 400, message: 'empty' }
            //   if (Array.isArray(data_object) || !(data_object instanceof Object))
                // throw { status: 400, message: 'should object' }
              var key_iterator,
                _RULES

                _RESULT = {}
              for (key_iterator in data_object) {
                  _RULES = _SCHEMA[key_iterator]
                  if (_RULES) {
                      console.log(_RULES.split('|')[0]);
                      _RULES.split('|')[0]()
                      _call_validation(_RULES.split('|'))
                    continue
                  }
              }
           
            } catch (errors) {
              const { status, message } = errors
              return { status: status || 500, message: message || 'error' }
            }
          }
    
       
          function _call_validation(_ARRAY_OF_RULES) {
            console.log(_ARRAY_OF_RULES,'in array');
          }
    
          _SCHEMA = skema
    
          return { validation }
        } catch (errors) {
          const { status, message } = errors
          var error_message = { status: status || 500, message: message || 'error' }
          console.log(error_message)
          return error_message
        }
      },
}

export default Kudation;