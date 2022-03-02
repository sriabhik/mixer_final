package com.mixer_grinder_service.model;

public class ResponseModel {

	private String responseValue;
	
	public ResponseModel(){}
	public ResponseModel(String responseValue)
	{
		this.responseValue=responseValue;
	}
	
	public String getResponseValue()
	{
		return this.responseValue;
	}
	
	public void setResponseValue(String responseValue)
	{
		this.responseValue=responseValue;
	}
}
