package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.Services;

public interface LocalService {
	
	Boolean addService(Services obj);
	
	Boolean deleteService(Long id);

	List<Services> getServices();
	
	Services getServiceById(Long id);

	Services updateServices(Long id, Services service);

}
