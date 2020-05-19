
function testMatrices(mSet,mvSet,mSetI,mIdent,mZero,mNN,failures)
{
	var rank = Math.sqrt(mSet.length);
	
	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
			
		for (j = 0; j < mSet.length; j++)
		{
			var row = Math.floor(j / rank);
			var col = j % rank;
			if (i == j)
				failures.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),1.0));
			else
				failures.addEq(testValueAndReport(bSilent_Pass,letter + "(" + row + "," + col + ")",mSet[i].at(row,col),0.0));
		}
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		if (row == col)
			failures.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),1.0));
		else
			failures.addEq(testValueAndReport(bSilent_Pass,"I(" + row + "," + col + ")",mIdent.at(row,col),0.0));
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		failures.addEq(testValueAndReport(bSilent_Pass,"0(" + row + "," + col + ")",mZero.at(row,col),0.0));
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		failures.addEq(testValueAndReport(bSilent_Pass,"N(" + row + "," + col + ")",mNN.at(row,col),j + 1));
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		failures.addEq(testValueAndReport(bSilent_Pass,"transpose N(" + row + "," + col + ")",mNN.transpose().at(row,col),mNN.at(col,row)));
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		failures.addEq(testValueAndReport(bSilent_Pass,"-N(" + row + "," + col + ")",mNN.negate().at(row,col),-(j + 1)));
	}

	for (j = 0; j < mSet.length; j++)
	{
		var row = Math.floor(j / rank);
		var col = j % rank;
		failures.addEq(testValueAndReport(bSilent_Pass,"2N(" + row + "," + col + ")",mNN.scale(2).at(row,col),2*(j + 1)));
	}

	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
			
		for (j = 0; j < mSet.length; j++)
		{
			var row = Math.floor(j / rank);
			var col = j % rank;
			if (i == j)
				failures.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),2.0 + j));
			else
				failures.addEq(testValueAndReport(bSilent_Pass,"(N + " + letter + ")(" + row + "," + col + ")",mNN.add(mSet[i]).at(row,col),1 + j));
		}
	}


	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
			
		for (j = 0; j < mSet.length; j++)
		{
			var row = Math.floor(j / rank);
			var col = j % rank;
			if (i == j)
				failures.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),j));
			else
				failures.addEq(testValueAndReport(bSilent_Pass,"(N - " + letter + ")(" + row + "," + col + ")",mNN.subtract(mSet[i]).at(row,col),1 + j));
		}
	}



	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
			
		failures.addEq(testValueAndReport(bSilent_Pass,"det(" + letter + ")",mSet[i].determinant(),0));
	}

	if (rank == 2)
		failures.addEq(testValueAndReport(bSilent_Pass,"det(N)",mNN.determinant(),-2));
	else
		failures.addEq(testValueAndReport(bSilent_Pass,"det(N)",mNN.determinant(),0));
	failures.addEq(testValueAndReport(bSilent_Pass,"det(I)",mIdent.determinant(),1));
	failures.addEq(testValueAndReport(bSilent_Pass,"det(0)",mZero.determinant(),0));


	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
		if (i % rank == Math.floor(i / rank))		
			failures.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),1));
		else
			failures.addEq(testValueAndReport(bSilent_Pass,"tr(" + letter + ")",mSet[i].trace(),0));
	}
	if (rank == 2)
		failures.addEq(testValueAndReport(bSilent_Pass,"tr(N)",mNN.trace(),5));
	else if (rank == 3)
		failures.addEq(testValueAndReport(bSilent_Pass,"tr(N)",mNN.trace(),15));
	else if (rank == 4)
		failures.addEq(testValueAndReport(bSilent_Pass,"tr(N)",mNN.trace(),34));
			
	failures.addEq(testValueAndReport(bSilent_Pass,"tr(I)",mIdent.trace(),rank));
	failures.addEq(testValueAndReport(bSilent_Pass,"tr(0)",mZero.trace(),0));



	for (j = 0; j < rank; j++)
	{
		var letter;
		if (rank < 4)
		{
			if (j == 0)
				letter = "vx";
			else if (j == 1)
				letter = "vy";
			else if (j == 2)
				letter = "vz";
		}
		else
		{
			if (j == 0)
				letter = "vt";
			else if (j == 1)
				letter = "vx";
			else if (j == 2)
				letter = "vy";
			else if (j == 3)
				letter = "vz";
		}
		
		var idx = 0;
		if (rank == 4)
			idx = 1;
			
		if (rank > 3)
			failures.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".t",mNN.dotVector(mvSet[j]).t,mNN.at(0,j)));
		failures.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".x",mNN.dotVector(mvSet[j]).x,mNN.at(idx + 0,j)));
		failures.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".y",mNN.dotVector(mvSet[j]).y,mNN.at(idx + 1,j)));
		if (rank > 2)
			failures.addEq(testValueAndReport(bSilent_Pass,"N." + letter + ".z",mNN.dotVector(mvSet[j]).z,mNN.at(idx + 2,j)));
	}


	for (i = 0; i < mSet.length; i++)
	{
		var letter = nToLetter(i);		
			
		var rowi = Math.floor(i / rank);
		var coli = i % rank;
			
		for (j = 0; j < mSet.length; j++)
		{
			var row = Math.floor(j / rank);
			var col = j % rank;
			if (Math.floor(coli) == Math.floor(col))
			{
				failures.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),mNN.at(row,rowi)));
			}
			else
			{
				failures.addEq(testValueAndReport(bSilent_Pass,"(N * " + letter + ")(" + row + "," + col + ")", mNN.multiply(mSet[i]).at(row,col),0));
			}
		}
	}

	for (i = 0; i < mSetI.length; i++)
	{
		for (j = 0; j < rank; j++)
		{
			for (k =0; k < rank; k++)
			{
				failures.addEq(testValueAndReport(bSilent_Pass,"(" + i + ")^(-1)(" + j + "," + k + ")", mSetI[i].invert().at(j,k),mSetI[i].transpose().at(j,k)));
			}
		}
	}
}
