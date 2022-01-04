function smallEnough(a, limit){
    for(let el of a){
      if(el > limit)
        return !true;
    }
    return !false;
  }