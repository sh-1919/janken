function janken(selection){
	//CPUの選択肢を決定
	var cp_selection = Math.floor(Math.random()*3);

	switch (selection){
		//ユーザーの選択肢がグーの場合
		case 0:
			if (cp_selection == selection){
				alert("引き分けです");
			} else if (cp_selection == selection - 1 ) {
				alert("あなたの負けです");
			} else if (cp_selection == selection - 2){
				alert("あなたの勝ちです");
			}	
			break;

		//ユーザーの選択肢がチョキの場合
		case 1:
			if (cp_selection == selection){
				alert("引き分けです");
			} else if (cp_selection == selection + 1 ) {
				alert("あなたの勝ちです");
			} else if (cp_selection == selection -1){
				alert("あなたの負けです");
			}
			break;

		//ユーザーの選択肢がパーの場合
		case 2:
			if (cp_selection == selection){
				alert("引き分けです");
			} else if (cp_selection == selection + 1 ) {
				alert("あなたの勝ちです");
			} else if (cp_selection == selection + 2){
				alert("あなたの負けです");
			}
			break;
	}
}