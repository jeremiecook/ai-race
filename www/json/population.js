var population = [
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.1220754694621933,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.443184130322006,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.7695024629404036,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.006293785845982794,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": -0.02241453170403669,
				"from": 5,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.006705359302604436,
				"from": 3,
				"to": 5,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.06548529076167453,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": 5
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 0.009250323331404409,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.028267845714963394,
				"type": "hidden",
				"squash": "HARD_TANH",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.061557132912312754,
				"from": 1,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.030919024487354785,
				"from": 3,
				"to": 5,
				"gater": 5
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.02206064309815199,
				"type": "hidden",
				"squash": "SELU",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 4,
				"to": 5,
				"gater": 4
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.09442862757995547,
				"from": 0,
				"to": 3,
				"gater": 5
			},
			{
				"weight": 0.08481824028553972,
				"from": 3,
				"to": 4,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": -0.03548257163203132,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.054038809960797,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.08536602952172193,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.1220754694621933,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.05174913366746652,
				"type": "hidden",
				"squash": "SINUSOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.057157456632654396,
				"from": 3,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": 0.044029461687189686,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": 5
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 9
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 10
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 8,
				"to": 8,
				"gater": null
			},
			{
				"weight": 1,
				"from": 9,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 10
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 9,
				"gater": 6
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 9,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 10,
				"to": 9,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 0.6856927700676357,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.08536602952172193,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 9
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 10
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 9,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 10,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 9,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.058092091903464926,
				"from": 9,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 9,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": 3
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.03950554689781066,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 5,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": 0.021181155499763446,
				"from": 0,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.063190428951622,
				"from": 3,
				"to": 4,
				"gater": 5
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "ABSOLUTE",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.616823317066302,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.19365022303158716,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.029955783448365733,
				"type": "hidden",
				"squash": "BENT_IDENTITY",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 5,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 4,
				"to": 5,
				"gater": 4
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.04226842192946707,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.026729300200717718,
				"from": 3,
				"to": 5,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.616823317066302,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.049827631027379575,
				"type": "hidden",
				"squash": "IDENTITY",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 4,
				"to": 5,
				"gater": 4
			},
			{
				"weight": -0.051055372673437606,
				"from": 5,
				"to": 4,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.07081491017361632,
				"from": 0,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.05053590755881539,
				"from": 3,
				"to": 4,
				"gater": 5
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.250715501301984,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.08536602952172193,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.17488646465979857,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.0573018894600863,
				"type": "hidden",
				"squash": "ABSOLUTE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 5
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 4,
				"to": 5,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 5,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 5,
				"gater": 5
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": 5
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": 5
			},
			{
				"weight": -0.07368634737352853,
				"from": 5,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.07635940692069304,
				"from": 3,
				"to": 4,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.06548529076167453,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.261894622472672,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.08536602952172193,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.7753066201290642,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 8
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 9
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.08536602952172193,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": -0.7528773217883657,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 2.1869062122188176,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.616823317066302,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.7331603081267756,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 9
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 10
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.0512190255458158,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 8.993673613992458,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.054038809960797,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 3,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.19365022303158716,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 0.021660521538571093,
				"from": 0,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.708229074062428,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": 0.8438880117534941,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.5959504256016874,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3466281337505648,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": 3
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 2.1622359644835805,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": 3
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.708229074062428,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 0.2647914965828352,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.616823317066302,
				"from": 2,
				"to": 3,
				"gater": 3
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.1220754694621933,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.6111861127104448,
				"from": 3,
				"to": 4,
				"gater": 3
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.4516261102117766,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.051055372673437606,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 11.230276193273689,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 4,
				"to": 4,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": null
			},
			{
				"weight": 12.137718055515235,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 9
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 10
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 9,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 10,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.01803527007877541,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0328374214118794,
				"from": 9,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 9,
				"gater": 6
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.09425883028162058,
				"from": 5,
				"to": 3,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 10
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	},
	{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": -0.44076674768136753,
				"type": "output",
				"squash": "INVERSE",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 1.2095631062307826,
				"type": "output",
				"squash": "BIPOLAR",
				"mask": 1,
				"index": 4
			}
		],
		"connections": [
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.02241453170403669,
				"from": 4,
				"to": 3,
				"gater": null
			},
			{
				"weight": 10.325816475375346,
				"from": 2,
				"to": 4,
				"gater": null
			},
			{
				"weight": -0.2289504207451273,
				"from": 1,
				"to": 4,
				"gater": 3
			},
			{
				"weight": 9.639473972933956,
				"from": 2,
				"to": 3,
				"gater": null
			},
			{
				"weight": -0.6333016356707128,
				"from": 0,
				"to": 4,
				"gater": 4
			},
			{
				"weight": -0.9758274406684865,
				"from": 1,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 2.167531074660568,
				"from": 0,
				"to": 3,
				"gater": 4
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
	}
];
