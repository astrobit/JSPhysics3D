

class ThreeMatrix
{
	constructor (otherThreeMatrix)
	{
		this._data = new Array();
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			var temp = new Array();
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				if (otherThreeMatrix != null && otherThreeMatrix instanceof ThreeMatrix)
					temp.push(otherThreeMatrix.at(TcI,TcJ));
				else
					temp.push(0);
			}
			this._data.push(temp);
		}
	}

	at(row, column)
	{
		if (row >= 0 && row < 3 && column >= 0 && column < 3 )
			return this._data[row][column];
		else
			return null;
	}

	setat(row,column,value)
	{
		if (row >= 0 && row < 3 && column >= 0 && column < 3 )
			this._data[row][column] = value;
	}

	dotVector(vector)
	{
		if (vector != null && vector instanceof ThreeVector)
		{
			return new ThreeVector(this._data[0][0] * vector.x + this._data[0][1] * vector.y + this._data[0][2] * vector.z,
							this._data[1][0] * vector.x + this._data[1][1] * vector.y + this._data[1][2] * vector.z,
							this._data[2][0] * vector.x + this._data[2][1] * vector.y + this._data[2][2] * vector.z,
							);
		}
		else
			return null;
	}
	row(rowNum)
	{
		if (rowNum != null && rowNum >= 0 && rowNum < 3)
		{
			return new ThreeVector(this._data[rowNum][0],this._data[rowNum][1],this._data[rowNum][2]);
		}
		else
			return null;
	}
	column(columnNum)
	{
		if (columnNum != null && columnNum >= 0 && columnNum < 3)
		{
			return new ThreeVector(this._data[0][columnNum],this._data[1][columnNum],this._data[2][columnNum]);
		}
		else
			return null;
	}
	dotThreeMatrix(ThreeMatrix)
	{
		if (ThreeMatrix != null && ThreeMatrix instanceof ThreeMatrix)
		{
			var ret = new ThreeMatrix();

			var TcI,TcJ;
			for (TcI = 0; TcI < 3; TcI++)
			{
				for (TcJ = 0; TcJ < 3; TcJ++)
				{
					ret.setat(TcI,TcJ,row(TcI).dot(ThreeMatrix.column(TcJ)));
				}
			}
			return ret;
		}
		else
			return null;
	}
	transpose()
	{
		var ret = new ThreeMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 3; TcI++)
		{
			for (TcJ = 0; TcJ < 3; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcJ][TcI];
			}
		}
		return ret;
	}
}
