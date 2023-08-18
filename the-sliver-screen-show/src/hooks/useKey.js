import React ,{useEffect} from 'react'

export const useKey = (key, action) => {
    useEffect(() => {
        function callBack (e) {
            if(e.code.toLowerCase() === key.toLowerCase()){     
                action();
              console.log('closing');
            }
        }
        document.addEventListener('keydown', callBack);
    
        return function(){
            document.removeEventListener('keydown', callBack);
        } 
      }, [action, key]);
}
