function name(max) {
    for(var i=0; i<= max; i++){
      let star = '';
      for(var j = 1; j <= max - i; j++){
          star += " *";
      };
      
      console.log(star);
    };
  };  

  name(5)