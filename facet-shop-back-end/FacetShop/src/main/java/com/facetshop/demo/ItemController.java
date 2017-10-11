package com.facetshop.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class ItemController {
    @Autowired
    ItemService itemService;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Item> getItems() {
        return itemService.findAll();
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void addItem(@RequestBody Item newItem) {
        itemService.add(newItem);
    }
}
