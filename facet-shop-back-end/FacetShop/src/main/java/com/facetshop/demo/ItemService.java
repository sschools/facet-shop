package com.facetshop.demo;

import java.util.List;

public interface ItemService {
    Item add(Item item);
    List<Item> findAll();
    Item find(int id);
    void delete(int id);
}
