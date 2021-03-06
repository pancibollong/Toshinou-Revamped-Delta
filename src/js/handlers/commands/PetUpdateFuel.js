/*
 * Created by Tanoshizo https://github.com/Alph4rd/Toshinou-Ultra/
*/
class PetUpdateFuel {
	static get ID() {
		return 18470;
	}

	constructor() {
		this._handler = (e, a) => {
            let command = e.wholeMessage.split("|");
            if (a.pet != null) {
            	a.petHasFuel = true;
            }
        }
    }

    get handler() {
        return this._handler;
    }

}