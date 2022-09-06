// @ts-ignore
Array.prototype.myMap = function(callback: (value: any) => any) {
  for (const i of this) {
    console.log(i, this);
  }
}

// https://dev.to/internettradie/series/8201