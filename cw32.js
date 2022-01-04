function cookingTime(eggs) {
    return time = (eggs == 0) ? 0 :(eggs <= 8) ? 5 : Math.ceil(eggs/8)*5;
  }