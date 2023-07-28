package com.neo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.LocalServiceProvider;
import com.neo.security.repository.ProviderRepo;

@Service
public class ProviderServiceImpl implements ProviderService {

	@Autowired
	private ProviderRepo repo;

	@Override
	public Boolean deleteProvider(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public List<LocalServiceProvider> getProviders() {
		return repo.findAll();
	}

	@Override
	public LocalServiceProvider getProviderByEmail(String email) {
		return repo.findByEmail(email).get();
	}

	@Override
	public Boolean updatingSchedule(LocalServiceProvider provider) {
		return repo.save(provider) != null ? true : false;
	}

	@Override
	public List<LocalServiceProvider> getProviderSpecific(String category, String location){
		return repo.findByCategoryAndLocation(category, location);
	}

	@Override
	public LocalServiceProvider updateLocalServiceProvider(String email, LocalServiceProvider obj) {
		
		LocalServiceProvider provider = repo.findByEmail(email).get();
		
		if(Objects.nonNull(provider)) {
			if(obj.getServiceProviding() != null) {
				provider.setServiceProviding(obj.getServiceProviding());
			}
			
			if(obj.getExperience() != 0) {
				provider.setExperience(obj.getExperience());
			}
			
			if(obj.getWorkingHour() != null) {
				provider.setWorkingHour(obj.getWorkingHour());
			}
			if(obj.getCategory() != null) {
				provider.setCategory(obj.getCategory());
			}
			return repo.saveAndFlush(provider);			
		}
		return null;
	}

}
