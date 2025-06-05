import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../models/weight_entry.dart';

class WeightProvider with ChangeNotifier {
  List<WeightEntry> _entries = [];

  List<WeightEntry> get entries => _entries;

  void addEntry(WeightEntry entry) {
    _entries.add(entry);
    saveData();
    notifyListeners();
  }

  void loadData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? data = prefs.getString('weight_entries');
    if (data != null) {
      List<dynamic> jsonData = jsonDecode(data);
      _entries = jsonData.map((e) => WeightEntry.fromJson(e)).toList();
      notifyListeners();
    }
  }

  void saveData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String data = jsonEncode(_entries.map((e) => e.toJson()).toList());
    await prefs.setString('weight_entries', data);
  }
}
