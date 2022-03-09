function pairSum(arr, sum){
	for(let i= 0; i < arr.length; i++){
		for (let n = i; n < arr.length; n++){
			
			if(sum == (arr[i] + arr[n]) && arr[i] != arr[n]){ return true; }
		}
	}
	return false;
}

module.exports = pairSum