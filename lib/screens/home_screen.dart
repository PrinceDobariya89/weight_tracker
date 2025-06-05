import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/weight_provider.dart';
import '../models/weight_entry.dart';
import '../widgets/weight_chart.dart';
import 'package:intl/intl.dart';

bool isSameDay(DateTime a, DateTime b) {
  return a.year == b.year && a.month == b.month && a.day == b.day;
}

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final _controller = TextEditingController();
  DateTime _selectedDate = DateTime.now();

  void _addEntry() {
    // double? weight = double.tryParse(_controller.text);
    double? weight = _currentWeight;
    if (weight == null) return;

    // Check if entry already exists for selected date
    bool exists = Provider.of<WeightProvider>(context, listen: false)
        .entries
        .any((e) => isSameDay(e.date, _selectedDate));

    if (exists) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Entry for this date already exists.")),
      );
      return;
    }

    Provider.of<WeightProvider>(context, listen: false)
        .addEntry(WeightEntry(date: _selectedDate, weight: weight));
    _controller.clear();
  }

  @override
  void initState() {
    super.initState();
    Provider.of<WeightProvider>(context, listen: false).loadData();
  }

  double _currentWeight = 50;

  @override
  Widget build(BuildContext context) {
    var entries = Provider.of<WeightProvider>(context).entries;
    return Scaffold(
      appBar: AppBar(title: const Text("Body Weight Tracker")),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          spacing: 24,
          children: [
            Expanded(child: WeightChart(entries: entries)),
            Row(
              mainAxisSize: MainAxisSize.min,
                spacing: 16, children: [
              Text("Date: ${DateFormat('dd-MM-yyyy').format(_selectedDate)}",
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
              ElevatedButton(
                  onPressed: () async {
                    DateTime? picked = await showDatePicker(
                        context: context,
                        initialDate: _selectedDate,
                        firstDate: DateTime(2000),
                        lastDate: DateTime.now());
                    if (picked != null) {
                      setState(() => _selectedDate = picked);
                    }
                  },
                  child: const Text("Select Date")),
            ]),
            Column(children: [
              Row(children: [
                IconButton(
                    icon: const Icon(Icons.remove),
                    onPressed: () => setState(() => _currentWeight -= 0.050)),
                Expanded(
                  child: Slider(
                      value: _currentWeight,
                      min: 30,
                      max: 100,
                      divisions: 1400,
                      // for 0.5 kg precision
                      label: "${_currentWeight.toStringAsFixed(3)} kg",
                      onChanged: (val) {
                        setState(() => _currentWeight = val);
                      }),
                ),
                IconButton(
                    icon: const Icon(Icons.add),
                    onPressed: () => setState(() => _currentWeight += 0.050)),
              ]),
              Text("current weight ${_currentWeight.toStringAsFixed(3)} kg",
                  style: const TextStyle(fontSize: 20)),
            ]),
            ElevatedButton(onPressed: _addEntry, child: const Text("save")),
            if (false)
              Expanded(
                child: ListView(
                  children: entries.reversed.map((e) {
                    return ListTile(
                      title: Text("${e.weight} kg"),
                      subtitle: Text(DateFormat('yyyy-MM-dd').format(e.date)),
                    );
                  }).toList(),
                ),
              )
          ],
        ),
      ),
    );
  }
}
