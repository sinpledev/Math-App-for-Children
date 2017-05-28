var math = {

	/**
     * 배열 크기
	 */
	arrayCnt : 10,

	/**
     *
	 * @returns {number}
	 */
	makeNumber: function () {
        return Math.floor(Math.random() * 10);
    },

	/**
     *
	 * @returns {Array}
	 */
	makeNumberArray: function () {
		var tempArray = [];

		for( var i = 0; i < math.arrayCnt; i++ ) {
			tempArray.push({
                num1        : math.makeNumber(),
                num2        : math.makeNumber(),
                answer      : -1,
                correct     : -1,
				remainder   : -1,

			});
		}
		return tempArray;
	},

    marking: function ( numArray, calcType ) {
	    var numArrayLength = numArray.length;
        for( var i = 0; i < numArrayLength; i++ ) {

            if( calcType == '+') {
                numArray[i].correct = numArray[i].num1 + numArray[i].num2;
            }
        }
        return numArray;
	}

};