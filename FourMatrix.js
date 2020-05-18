/** 
@brief A javascript implementation of a 4x4 matrix (or rank 2 tensor)
@details 
@author Brian W. Mulligan
@version 1.0.0
@date May 2020
@copyright MIT License
*/

class FourMatrix
{
/** 
FourMatrix constructor. If the parameter is null or not a valid type, the matrix will be initiailized as a zero matrix.
@param otherFourMatrix a structure containing the value with which to initialize the matrix. otherFourMatrix may be a FourMatrix, an Array with 16 values (assumed to be in row order, or an Array containing four Arrays, each with length 4, and assumed to be in [row][column] order.
*/
	constructor (otherFourMatrix)
	{
		this._data = new Array();
		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			var temp = new Array();
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				if (otherFourMatrix != null)
				{
					if (otherFourMatrix instanceof FourMatrix)
						temp.push(otherFourMatrix.at(TcI,TcJ));
					else if (otherFourMatrix instanceof Array)
					{
						if (otherFourMatrix.length == 16)
						{
							temp.push(otherFourMatrix[TcI * 4 + TcJ]);
						}
						else if (otherFourMatrix.length == 4 && otherFourMatrix[0].length == 4 && otherFourMatrix[1].length == 4 && otherFourMatrix[2].length == 4 && otherFourMatrix[3].length == 4)
						{
							temp.push(otherFourMatrix[TcI][TcJ]);
						}
						else
							temp.push(0);
					}
					else
						temp.push(0);
				}
				else
					temp.push(0);
			}
			this._data.push(temp);
		}
	}
/** 
Retreive the value of the element at the given row and column, zero indexed
@param row the zero indexed row from which to retrieve an element
@param column the zero indexed column from which to retrieve an element
@returns the value at the selected row and column, null otherwise
*/
	at(row, column)
	{
		if (row >= 0 && row < 4 && column >= 0 && column < 4 )
			return this._data[row][column];
		else
			return null;
	}

/** 
Set the value of the element at the given row and column, zero indexed
@param row the zero indexed row from which to set an element
@param column the zero indexed column from which to set an element
@param value the value to insert into the matrix.
*/
	setat(row,column,value)
	{
		if (row >= 0 && row < 4 && column >= 0 && column < 4 )
			this._data[row][column] = value;
	}

/** 
Retrieve a row vector for a given row
@param row the zero indexed row from which to retrieve
@returns If row is a valid index, then a FourVector containing the row data, otherwise null
*/
	row(rowNum)
	{
		if (rowNum != null && rowNum >= 0 && rowNum < 4)
		{
			return new FourVector(this._data[rowNum][0],this._data[rowNum][1],this._data[rowNum][2],this._data[rowNum][3]);
		}
		else
			return null;
	}
/** 
Retrieve a column vector for a given column
@param column the zero indexed column from which to retrieve
@returns If column is a valid index, then a FourVector containing the column data, otherwise null
*/
	column(columnNum)
	{
		if (columnNum != null && columnNum >= 0 && columnNum < 4)
		{
			return new FourVector(this._data[0][columnNum],this._data[1][columnNum],this._data[2][columnNum],this._data[3][columnNum]);
		}
		else
			return null;
	}

/** 
Perform a matrix multiplication with a column vector
@param vector the FourVector by which the matrix is multiplied
@returns the value at the selected row and column, null otherwise
*/
	dotVector(vector)
	{
		if (vector != null && vector instanceof FourVector)
		{
			return new FourVector(this._data[0][0] * vector.t + this._data[0][1] * vector.x + this._data[0][2] * vector.y + this._data[0][3] * vector.z,
							this._data[1][0] * vector.t + this._data[1][1] * vector.x + this._data[1][2] * vector.y + this._data[1][3] * vector.z,
							this._data[2][0] * vector.t + this._data[2][1] * vector.x + this._data[2][2] * vector.y + this._data[2][3] * vector.z,
							this._data[3][0] * vector.t + this._data[3][1] * vector.x + this._data[3][2] * vector.y + this._data[3][3] * vector.z
							);
		}
		else
			return null;
	}
/** 
Perform a scalar multiplication of a three matrix
@param matrix the FourMatrix by which the matrix is multiplied
@returns if matrix is a FourMatrix, then a new FourMatrix containing the result of the multiplication, otherwise null
*/
	scale(scalar)
	{
		var ret = new FourMatrix();

		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcI][TcJ] * scalar;
			}
		}
		return ret;
	}
/** 
Perform a matrix multiplication with a FourMatrix
@param matrix the FourMatrix by which the matrix is multiplied
@returns if matrix is a FourMatrix, then a new FourMatrix containing the result of the multiplication, otherwise null
*/
	multiply(matrix)
	{
		if (matrix != null && matrix instanceof FourMatrix)
		{
			var ret = new FourMatrix();

			ret._data[0][0] = this._data[0][0] * matrix._data[0][0] + this._data[0][1] * matrix._data[1][0] + this._data[0][2] * matrix._data[2][0] + this._data[0][3] * matrix._data[3][0];
			ret._data[0][1] = this._data[0][0] * matrix._data[0][1] + this._data[0][1] * matrix._data[1][1] + this._data[0][2] * matrix._data[2][1] + this._data[0][3] * matrix._data[3][1];
			ret._data[0][2] = this._data[0][0] * matrix._data[0][2] + this._data[0][1] * matrix._data[1][2] + this._data[0][2] * matrix._data[2][2] + this._data[0][3] * matrix._data[3][2];
			ret._data[0][3] = this._data[0][0] * matrix._data[0][3] + this._data[0][1] * matrix._data[1][3] + this._data[0][2] * matrix._data[2][3] + this._data[0][3] * matrix._data[3][3];

			ret._data[1][0] = this._data[1][0] * matrix._data[0][0] + this._data[1][1] * matrix._data[1][0] + this._data[1][2] * matrix._data[2][0] + this._data[1][3] * matrix._data[3][0];
			ret._data[1][1] = this._data[1][0] * matrix._data[0][1] + this._data[1][1] * matrix._data[1][1] + this._data[1][2] * matrix._data[2][1] + this._data[1][3] * matrix._data[3][1];
			ret._data[1][2] = this._data[1][0] * matrix._data[0][2] + this._data[1][1] * matrix._data[1][2] + this._data[1][2] * matrix._data[2][2] + this._data[1][3] * matrix._data[3][2];
			ret._data[1][3] = this._data[1][0] * matrix._data[0][3] + this._data[1][1] * matrix._data[1][3] + this._data[1][2] * matrix._data[2][3] + this._data[1][3] * matrix._data[3][3];

			ret._data[2][0] = this._data[2][0] * matrix._data[0][0] + this._data[2][1] * matrix._data[1][0] + this._data[2][2] * matrix._data[2][0] + this._data[2][3] * matrix._data[3][0];
			ret._data[2][1] = this._data[2][0] * matrix._data[0][1] + this._data[2][1] * matrix._data[1][1] + this._data[2][2] * matrix._data[2][1] + this._data[2][3] * matrix._data[3][1];
			ret._data[2][2] = this._data[2][0] * matrix._data[0][2] + this._data[2][1] * matrix._data[1][2] + this._data[2][2] * matrix._data[2][2] + this._data[2][3] * matrix._data[3][2];
			ret._data[2][3] = this._data[2][0] * matrix._data[0][3] + this._data[2][1] * matrix._data[1][3] + this._data[2][2] * matrix._data[2][3] + this._data[2][3] * matrix._data[3][3];

			ret._data[3][0] = this._data[3][0] * matrix._data[0][0] + this._data[3][1] * matrix._data[1][0] + this._data[3][2] * matrix._data[2][0] + this._data[3][3] * matrix._data[3][0];
			ret._data[3][1] = this._data[3][0] * matrix._data[0][1] + this._data[3][1] * matrix._data[1][1] + this._data[3][2] * matrix._data[2][1] + this._data[3][3] * matrix._data[3][1];
			ret._data[3][2] = this._data[3][0] * matrix._data[0][2] + this._data[3][1] * matrix._data[1][2] + this._data[3][2] * matrix._data[2][2] + this._data[3][3] * matrix._data[3][2];
			ret._data[3][3] = this._data[3][0] * matrix._data[0][3] + this._data[3][1] * matrix._data[1][3] + this._data[3][2] * matrix._data[2][3] + this._data[3][3] * matrix._data[3][3];
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix addition with a FourMatrix
@param matrix the FourMatrix which the matrix is added
@returns if matrix is a FourMatrix, then a new FourMatrix containing the result of the addition, otherwise null
*/
	add(matrix)
	{
		if (matrix != null && matrix instanceof FourMatrix)
		{
			var ret = new FourMatrix();

			ret._data[0][0] = this._data[0][0] + matrix._data[0][0];
			ret._data[0][1] = this._data[0][1] + matrix._data[0][1];
			ret._data[0][2] = this._data[0][2] + matrix._data[0][2];
			ret._data[0][3] = this._data[0][3] + matrix._data[0][3];

			ret._data[1][0] = this._data[1][0] + matrix._data[1][0];
			ret._data[1][1] = this._data[1][1] + matrix._data[1][1];
			ret._data[1][2] = this._data[1][2] + matrix._data[1][2];
			ret._data[1][3] = this._data[1][3] + matrix._data[1][3];

			ret._data[2][0] = this._data[2][0] + matrix._data[2][0];
			ret._data[2][1] = this._data[2][1] + matrix._data[2][1];
			ret._data[2][2] = this._data[2][2] + matrix._data[2][2];
			ret._data[2][3] = this._data[2][3] + matrix._data[2][3];

			ret._data[3][0] = this._data[3][0] + matrix._data[3][0];
			ret._data[3][1] = this._data[3][1] + matrix._data[3][1];
			ret._data[3][2] = this._data[3][2] + matrix._data[3][2];
			ret._data[3][3] = this._data[3][3] + matrix._data[3][3];
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix subtraction with a FourMatrix
@param matrix the FourMatrix which is to be subtracted from this matrix
@returns if matrix is a FourMatrix, then a new FourMatrix containing the result of the subtraction, otherwise null
*/
	subtract(matrix)
	{
		if (matrix != null && matrix instanceof FourMatrix)
		{
			var ret = new FourMatrix();

			ret._data[0][0] = this._data[0][0] - matrix._data[0][0];
			ret._data[0][1] = this._data[0][1] - matrix._data[0][1];
			ret._data[0][2] = this._data[0][2] - matrix._data[0][2];
			ret._data[0][3] = this._data[0][3] - matrix._data[0][3];

			ret._data[1][0] = this._data[1][0] - matrix._data[1][0];
			ret._data[1][1] = this._data[1][1] - matrix._data[1][1];
			ret._data[1][2] = this._data[1][2] - matrix._data[1][2];
			ret._data[1][3] = this._data[1][3] - matrix._data[1][3];

			ret._data[2][0] = this._data[2][0] - matrix._data[2][0];
			ret._data[2][1] = this._data[2][1] - matrix._data[2][1];
			ret._data[2][2] = this._data[2][2] - matrix._data[2][2];
			ret._data[2][3] = this._data[2][3] - matrix._data[2][3];

			ret._data[3][0] = this._data[3][0] - matrix._data[3][0];
			ret._data[3][1] = this._data[3][1] - matrix._data[3][1];
			ret._data[3][2] = this._data[3][2] - matrix._data[3][2];
			ret._data[3][3] = this._data[3][3] - matrix._data[3][3];
			return ret;
		}
		else
			return null;
	}
/** 
Perform a matrix transpose
@returns A new FourMatrix containing the result of the transposition
*/
	transpose()
	{
		var ret = new FourMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				ret._data[TcI][TcJ] = this._data[TcJ][TcI];
			}
		}
		return ret;
	}
/** 
Get the additive inverse of a matrix
@returns A new FourMatrix containing the result of the negation
*/
	negate()
	{
		var ret = new FourMatrix();
		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				ret._data[TcI][TcJ] = -this._data[TcI][TcJ];
			}
		}
		return ret;
	}
/**
Get the determinant of the matrix
@returns The determinant of the matrix
*/
	determinant()
	{
		return this._data[0][0] * (this._data[1][1] * (this._data[2][2] * this._data[3][3] - this._data[2][3] * this._data[3][2])
									- this._data[1][2] * (this._data[2][1] * this._data[3][3] - this._data[2][3] * this._data[3][1])
									+ this._data[1][3] * (this._data[2][1] * this._data[3][2] - this._data[2][2] * this._data[3][1]))
				- this._data[0][1] * (this._data[1][0] * (this._data[2][2] * this._data[3][3] - this._data[2][3] * this._data[3][2])
									- this._data[1][2] * (this._data[2][0] * this._data[3][3] - this._data[2][3] * this._data[3][0])
									+ this._data[1][3] * (this._data[2][0] * this._data[3][2] - this._data[2][2] * this._data[3][0]))
				+ this._data[0][2] * (this._data[1][0] * (this._data[2][1] * this._data[3][3] - this._data[2][3] * this._data[3][1])
									- this._data[1][1] * (this._data[2][0] * this._data[3][3] - this._data[2][3] * this._data[3][0])
									+ this._data[1][3] * (this._data[2][0] * this._data[3][1] - this._data[2][1] * this._data[3][0]))
				- this._data[0][3] * (this._data[1][0] * (this._data[2][1] * this._data[3][2] - this._data[2][2] * this._data[3][1])
									- this._data[1][1] * (this._data[2][0] * this._data[3][2] - this._data[2][2] * this._data[3][0])
									+ this._data[1][2] * (this._data[2][0] * this._data[3][1] - this._data[2][1] * this._data[3][0]));
	}
	
/**
Get the trace of the matrix
@returns The trace of the matrix
*/
	trace()
	{
		return this._data[0][0] + this._data[1][1] + this._data[2][2] + this._data[3][3];
	}
/**
Get the inverse of the matrix
@returns A new FourMatrix containing the multiplicitave inverse
*/
	invert()
	{
		var ret = null;
		var det = this.determinant();
		if (det != 0.0)
		{
			var invdet = 1.0 / det;
			var tra = this.trace();
			
			ret = new FourMatrix();
			var asq = this.multiply(this);
			var trasq = asq.trace();
			
			var acb = asq.multiply(this);
			var tracb = acb.trace();
			
			ret._data[0][0] = invdet * ((tra * tra * tra - 3 * tra * trasq + 2 * tracb) / 6.0 - 0.5 * this._data[0][0] * (tra * tra - trasq) + asq._data[0][0] * tra - acb._data[0][0]);
			ret._data[1][1] = invdet * ((tra * tra * tra - 3 * tra * trasq + 2 * tracb) / 6.0 - 0.5 * this._data[1][1] * (tra * tra - trasq) + asq._data[1][1] * tra - acb._data[1][1]);
			ret._data[2][2] = invdet * ((tra * tra * tra - 3 * tra * trasq + 2 * tracb) / 6.0 - 0.5 * this._data[2][2] * (tra * tra - trasq) + asq._data[2][2] * tra - acb._data[2][2]);
			ret._data[3][3] = invdet * ((tra * tra * tra - 3 * tra * trasq + 2 * tracb) / 6.0 - 0.5 * this._data[3][3] * (tra * tra - trasq) + asq._data[3][3] * tra - acb._data[3][3]);
			
			ret._data[0][1] = invdet * (-0.5 * this._data[0][1] * (tra * tra - trasq) + asq._data[0][1] * tra - acb._data[0][1]);
			ret._data[0][2] = invdet * (-0.5 * this._data[0][2] * (tra * tra - trasq) + asq._data[0][2] * tra - acb._data[0][2]);
			ret._data[0][3] = invdet * (-0.5 * this._data[0][3] * (tra * tra - trasq) + asq._data[0][3] * tra - acb._data[0][3]);

			ret._data[1][0] = invdet * (-0.5 * this._data[1][0] * (tra * tra - trasq) + asq._data[1][0] * tra - acb._data[1][0]);
			ret._data[1][2] = invdet * (-0.5 * this._data[1][2] * (tra * tra - trasq) + asq._data[1][2] * tra - acb._data[1][2]);
			ret._data[1][3] = invdet * (-0.5 * this._data[1][3] * (tra * tra - trasq) + asq._data[1][3] * tra - acb._data[1][3]);

			ret._data[2][0] = invdet * (-0.5 * this._data[2][0] * (tra * tra - trasq) + asq._data[2][0] * tra - acb._data[2][0]);
			ret._data[2][1] = invdet * (-0.5 * this._data[2][1] * (tra * tra - trasq) + asq._data[2][1] * tra - acb._data[2][1]);
			ret._data[2][3] = invdet * (-0.5 * this._data[2][3] * (tra * tra - trasq) + asq._data[2][3] * tra - acb._data[2][3]);

			ret._data[3][0] = invdet * (-0.5 * this._data[3][0] * (tra * tra - trasq) + asq._data[3][0] * tra - acb._data[3][0]);
			ret._data[3][1] = invdet * (-0.5 * this._data[3][1] * (tra * tra - trasq) + asq._data[3][1] * tra - acb._data[3][1]);
			ret._data[3][2] = invdet * (-0.5 * this._data[3][2] * (tra * tra - trasq) + asq._data[3][2] * tra - acb._data[3][2]);
		}
		else
			console.log("FourMatrix error: Inverting a zero matrix");
		return ret;
	}
/** 
Load the zero matrix
@returns none
*/
	loadZero()
	{
		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				this._data[TcI][TcJ] = 0;
			}
		}
	}
/** 
Load the identity matrix
@returns none
*/
	loadIdentity()
	{
		var TcI,TcJ;
		for (TcI = 0; TcI < 4; TcI++)
		{
			for (TcJ = 0; TcJ < 4; TcJ++)
			{
				if (TcI == TcJ)
					this._data[TcI][TcJ] = 1.0;
				else
					this._data[TcI][TcJ] = 0;
			}
		}
	}
}
