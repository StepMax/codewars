function twiceAsOld(dadYearsOld, sonYearsOld) {
    for (i = 1; i < dadYearsOld ; i++) {
      if (sonYearsOld*2 + i == dadYearsOld || sonYearsOld*2 - i == dadYearsOld) {
        return i;
      } else if (sonYearsOld*2 == dadYearsOld) {
        return 0;
      } else if (sonYearsOld == 0) {
        return dadYearsOld;
      }
    } 
  }