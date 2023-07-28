package com.neo.security.service;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;

import com.neo.security.entity.Services;
import com.neo.security.repository.ServicesRepo;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class LocalServiceImpl implements LocalService {

	private final ServicesRepo repo;

	@Override
	public Boolean addService(Services obj) {
		return repo.save(obj) != null ? true : false;
	}

	@Override
	public Boolean deleteService(Long id) {
		if(repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}

	@Override
	public List<Services> getServices() {
		return repo.findAll();
	}

	@Override
	public Services updateServices(Long id, Services service) {
		
		Services obj = repo.findById(id).get();
		
		if(Objects.nonNull(obj)) {
			if(service.getCategory() != null) {
				obj.setCategory(service.getCategory());
			}
			if(service.getDescription() != null) {
				obj.setDescription(service.getDescription());
			}
				
			return repo.save(obj);
		}
		return null;
	}

	@Override
	public Services getServiceById(Long id) {
		return repo.findById(id).get();
	}

}
