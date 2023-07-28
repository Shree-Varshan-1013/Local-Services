package com.neo.security.service;

import java.util.List;

import com.neo.security.entity.LocalServiceProvider;

public interface ProviderService {

	Boolean deleteProvider(int id);
	
	List<LocalServiceProvider> getProviders();

	LocalServiceProvider getProviderByEmail(String email);

	Boolean updatingSchedule(LocalServiceProvider provider);

	List<LocalServiceProvider> getProviderSpecific(String category, String location);
	
	LocalServiceProvider updateLocalServiceProvider(String email, LocalServiceProvider obj);

}
